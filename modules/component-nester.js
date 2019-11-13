const lodash = require('lodash')

function createJoinsObject(joins) {
  return joins.reduce((memo, join) => {
    
    if (!memo[join.parent_id]) {
      memo[join.parent_id] = [join.child_id]
    } else {
      memo[join.parent_id].push(join.child_id)
    }
    
    return memo
  }, {})
}

function nestComponents(joinsObject) {
  lodash.reverse(Object.keys(joinsObject))
  .forEach(key => {
    joinsObject[key].forEach(component => {
      if (joinsObject[component.id]) {
        component.children = joinsObject[component.id]
      }
    })
  })
}

function mapComponentsToJoinsObject(joinsObject, components) {
  return Object.keys(joinsObject)
  .reduce((memo, key) => {
    memo[key] = joinsObject[key].map(id => {
      return components.find(component => component.id === id)
    })
    
    return memo
  }, {})
}

function createNestedComponentsArray(relationships, components) {

  let joinsObject = createJoinsObject(relationships)
  const appComponent = components.find(component => component.name === 'App')

  joinsObject = mapComponentsToJoinsObject(joinsObject, components)

  nestComponents(joinsObject)

  appComponent.children = joinsObject[appComponent.id]
  
  return [appComponent]
}

module.exports = {
  createNestedComponentsArray
}