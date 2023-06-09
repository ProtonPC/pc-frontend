import { createServer } from "miragejs"
import { getItems, setItems } from "./local-storage"

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace('-', '');
}


const ALLOWED_HOSTS = [
  'https://zipapi.fly.dev',
  'https://pricecalculator.fly.dev',
  'https://pc-upload.fly.dev',
]

class MirageBuilder{

  setModels(models){
    this.models = models
    return this
  }

  setMirageInstance(mirageInstance){
    this.mirageInstance = mirageInstance
    return this
  }

  // helpers:
  addRestOperations(){
    let vm = this
    this.models.forEach((model) => {
      let pluralName = camelize(`${model}s`)
      console.log(pluralName)
      // GET ALL items:
      vm.mirageInstance.get(`/${pluralName}`, (_) => {
        return getItems(model)
      })
      // GET single item:
      vm.mirageInstance.get(`/${pluralName}/:id`, (_, request) => {
        let id = request.params.id;
        let all = getItems(model)
        let item = all.filter(item => item.id == id)[0]
        return item
      })
      // POST items:
      vm.mirageInstance.post(`/${pluralName}`, (_, request) => {
        let attrs = JSON.parse(request.requestBody);
        let all = getItems(model)
        let newItem = {...attrs, id: all.length + 1}
        all.push(newItem)
        setItems(model, all)
        return newItem
      })
      // DELETE item:
      vm.mirageInstance.delete(`/${pluralName}/:id`, (_, request) => {
        let id = request.params.id
        let all = getItems(model)
        let filteredItems = all.filter(item => item.id != id)
        //Sync DB
        setItems(model, filteredItems)
        return {status: "ok"}
      })
      // PUT item
      vm.mirageInstance.put(`/${pluralName}/:id`, (_, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let all = getItems(model)
        // [1,2,3] -> 3 => filtered => [1,2]
        let filteredItems = all.filter(item => item.id != id)
        let [item] = all.filter(item => item.id == id)
        item = {...item, ...attrs};
        filteredItems.push(item)
        //Sync DB
        setItems(model, filteredItems)
        return item
      })

    })
  }
}

export function makeServer({ environment = "development" } = {}) {
  let mirageBuilder = new MirageBuilder(
  )
  mirageBuilder.setModels([
    "user",
    "product-type",
    "supplier",
    "port",
    "customer",
    "product",
    'warehouse',
    'user-group'
  ])

  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      mirageBuilder
      .setMirageInstance(this)
      .addRestOperations()

      // Sample:
      // this.get("/users", (schema) => {
      //   return schema.users.all()
      // })

      this.passthrough("*")
      this.passthrough((request) => {
        return ALLOWED_HOSTS.filter(allowedHost => request.url.startsWith(allowedHost)).length;
      }, {
        allowedHosts: ALLOWED_HOSTS.map(host => host.replace('https://', '').replace('http://', ''))
      });
    },
  })

  return server
}
