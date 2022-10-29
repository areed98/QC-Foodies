const { Post } = require('../models');

const postdata = [
  {
    title: 'Pizza Hut',
    post_url: 'https://www.pizzahut.com/',
    user_id: 10,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'McDonnalds!',
    post_url: 'https://www.mcdonalds.com/us/en-us.html',
    user_id: 8,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Outback',
    post_url: 'https://www.outback.com',
    user_id: 1,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'NODA brewery',
    post_url: 'https://www.nodabrewing.com/',
    user_id: 4,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Wooden Robot',
    post_url: 'https://woodenrobotbrewery.com/',
    user_id: 7,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'La Unica',
    post_url: 'https://www.launicarestaurants.com/',
    user_id: 4,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'The Garbage Truck',
    post_url: 'https://www.thegarbagetruck.com/',
    user_id: 1,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Pure Pizza',
    post_url: 'http://purepizzaclt.com/',
    user_id: 1,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Mr. Tokyo',
    post_url: 'https://mrtokyojapanese.com/',
    user_id: 9,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Little Big Burger',
    post_url: 'https://littlebigburger.com/',
    user_id: 5,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7,
    image_path: 'https://res.cloudinary.com/dt1ejaaxy/image/upload/v1666990578/QCFoodies/d4d6b2d4-729f-41ab-b5a5-935bc29caced.png'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
