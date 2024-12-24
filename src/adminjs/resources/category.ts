import { ResourceOptions } from "adminjs"
export const CategoryResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['Name', 'Position'],
    filterProperties: [ 'name', 'position', 'createdAt', 'updatedAt'],
    listProperties: [ 'id', 'name', 'position'],
    showProperties: [ 'id', 'name', 'position', 'createdAt', 'updatedAt']
}