'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('EntryTickets', [{
        monumentName : "Qutub Minar",
        price: 40,
        state: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Red Fort",
        price: 90,
        state: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Jantar Mantar",
        price: 15,
        state: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Tippu Palace",
        price: 20,
        state: "Karnataka",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Statue of Unity",
        price: 120,
        state: "Gujrat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Taj Mahal",
        price: 250,
        state: "U.P.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Ajanta Caves",
        price: 40,
        state: "Maharashtra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Konark Sun Temple",
        price: 40,
        state: "Odisha",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Amber Fort",
        price: 100,
        state: "Rajasthan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Nahargarh Fort",
        price: 20,
        state: "Rajasthan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Jaisalmer Fort",
        price: 30,
        state: "Rajasthan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Dutch Palace",
        price: 10,
        state: "Kerala",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Jews Synagogue",
        price: 10,
        state: "Kerala",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Rock Fort",
        price: 5,
        state: "Tamil Nadu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Madurai Temple",
        price: 100,
        state: "Tamil Nadu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Victoria Memorial",
        price: 10,
        state: "Kolkata",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Purana Qila",
        price: 15,
        state: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Hawa Mahal",
        price: 10,
        state: "Rajasthan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Agra Fort",
        price: 35,
        state: "U.P.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Vivekananda Rock",
        price: 20,
        state: "Tamil Nadu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Rock Garden",
        price: 20,
        state: "Haryana",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Elephanta Caves",
        price: 30,
        state: "Maharashtra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        price: 70,
        state: "Maharashtra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Naggar Castle",
        price: 30,
        state: "Himachal Pradesh",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        monumentName : "Chail Palace",
        price: 100,
        state: "Himachal Pradesh",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('EntryTickets', null, {});
  }
};
