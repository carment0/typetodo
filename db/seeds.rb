# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


todo = Todo.create([
    {title: 'Clean up dodo', body: 'Mother fucking rails', done: false},
    {title: 'Hello World', body: 'World is fucking hot now', done: false},
    {title: 'Bye World', body: 'Good bye amigos', done: false}
])