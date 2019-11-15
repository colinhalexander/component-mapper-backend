const components = [
  {
    id: 9,
    name: 'App',
    type: 'class',
    notes: 'Top level component, holds routes, state (just user info for now)',
    project_id: '1'
  },
  {
    id: 10,
    name: 'LandingPage',
    type: 'class',
    notes: '',
    project_id: '1'
  },
  {
    id: 11,
    name: 'HowToPage',
    type: 'functional',
    notes: 'Displays instructions for using the app',
    project_id: '1'
  },
  {
    id: 12,
    name: 'NavBar',
    type: 'functional',
    notes: 'a bar that navigates',
    project_id: '1'
  },
  {
    id: 13,
    name: 'Footer',
    type: 'functional',
    notes: '',
    project_id: '1'
  },
  {
    id: 14,
    name: 'ProjectPage',
    type: 'class',
    notes: '',
    project_id: '1'
  },
  {
    id: 15,
    name: 'ComponentLevel',
    type: 'class',
    notes: '',
    project_id: '1'
  },
  {
    id: 16,
    name: 'Komponent',
    type: 'class',
    notes: '',
    project_id: '1'
  }
]

const joins = [
  { parent_id: 9, child_id: 10 },
  { parent_id: 9, child_id: 11 },
  { parent_id: 9, child_id: 14 },
  { parent_id: 10, child_id: 12 },
  { parent_id: 10, child_id: 13 },
  { parent_id: 11, child_id: 12 },
  { parent_id: 11, child_id: 13 },
  { parent_id: 14, child_id: 15 },
  { parent_id: 15, child_id: 16 }
]

class ComponentMapper {

  writeComponentFile = (component) => {

  }

  formatComponents = (components) => {
    return components.map(component => {

      const isContainer = component.children.length > 1

      return {
        ...component,
        isContainer
      }
    })
  }

  addChildrenToComponents = (components, joins) => {
    components
      .forEach(component => this.getChildren(component, joins))

    components
      .forEach(this.mapChildrenToComponents)
  }

  getChildren = (component, joins) => {
    component.children = joins
        .filter(join => join.parent_id === component.id)
        .map(join => join.child_id)
  }

  mapChildrenToComponents = (component) => {
    component.children = component.children.map(child_id => {
      return components.find(component => child_id === component.id)
    })
  }
}

const mapper = new ComponentMapper

mapper.addChildrenToComponents(components, joins)

console.log(components)