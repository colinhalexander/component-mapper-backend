const lodash = require('lodash')

function createNestedComponentsArray(relationships, components) {
  let joinsObject = createJoinsObject(relationships)
  const appComponent = components.find(component => component.name === 'App')

  joinsObject = mapComponentsToJoinsObject(joinsObject, components)

  nestComponents(joinsObject)

  appComponent.children = joinsObject[appComponent.id]
  
  return [appComponent]
}

// create object where keys are parentIDs pointing to an array of their children's IDs
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

function mapComponentsToJoinsObject(joinsObject, components) {
  return Object.keys(joinsObject)
          .reduce((memo, key) => {
            memo[key] = joinsObject[key].map(id => {
              return components.find(component => component.id === id)
            })
            
            return memo
          }, {})
}

function nestComponents(joinsObject) {
  lodash.reverse( Object.keys(joinsObject) )
    .forEach(key => {
      joinsObject[key].forEach(component => {
        if (joinsObject[component.id]) {
          component.children = joinsObject[component.id]
        }
      })
    })
}

module.exports = {
  createNestedComponentsArray
}