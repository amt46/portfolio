import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import contact from './contact'
import skills from './skills' 
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
	  projects, contact, skills
  ]),
})
