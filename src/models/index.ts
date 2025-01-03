// src/models/index.ts

import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { User } from './User'

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)

Course.hasMany(Episode) // 1 curso tem muitos episodios
Episode.belongsTo(Course) //pode ter 1 curso


export {
  Course,
  Category,
  Episode,
  User
}