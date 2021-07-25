import First from '../../images/opt1.png';
import logo1 from '../../images/heineken.png';
import Second from '../../images/opt2.png';
import logo2 from '../../images/cocacola.png';
import bebelac from '../../images/bebelac.png';
import camel from '../../images/camel.png';
import dutch from '../../images/dutchmill.png';
import mevius from '../../images/mevius.png';
import sgm from '../../images/sgm.png';
import heineken1 from '../../images/heineken1.jpg'
import heineken2 from '../../images/heineken2.jpg'
import heineken3 from '../../images/heineken3.jpg'
import heineken4 from '../../images/heineken4.jpg'

export default [
  {
    option: 'display',
    //atau bikin lagi object array di dalem object array
    data: [
      {
        id : 1,
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: Second,
        logo: logo1,
        product : [
          {
            prod : 'Floor Display',
            name : 'Bintang Radler Display',
            desc : 
            'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan wood lathe, cutting acrylic, dan menginstall sticker digital printing',
            image : [
              {
                file : heineken1
              },
              {
                file : heineken2
              },
            ]
          },
          {
            prod : 'Table Display',
            name : 'Fayrouz Display',
            desc : 
            'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan menginstall sticker digital printing',
            image : [
              {
                file : heineken2
              },
              {
                file : heineken2
              },
            ]
          },
          {
            prod : 'Bar Top', 
            name : 'Heineken Display', 
            desc : 'Menggunakan material acrylic, led light, sticker cutting. Process diawali dengan cutting acrylic, insttallation sticker cutting, installation LED light dan electricity', 
            image : [
              {
                file : heineken3
              },
              {
                file : heineken3
              },
            ]
          },
          {
            prod : 'Table Display', 
            name : 'Radler Bottle Display', 
            desc : 'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan installation sticker digital printing', 
            image : [
              {
                file : heineken4
              },
              {
                file : heineken4
              },
            ]
          },
        ]
      },
      {
        id : 2,
        title: 'PT. Dutch Mill Indonesia*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: First,
        logo: dutch,
        product : [
          {
            prod : 'Floor Display', 
            name : 'Dutchmill Drinks Display', 
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan wood lathe, cutting acrylic, dan installation sticker digital printing',
          },
        ]
      },
      {
        id : 3,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: camel,
        product : [
          {
            prod : 'Backwall Display', 
            name : 'Camel Cigarettes Backwall Display', 
            desc : 'Menggunakan material alumumium iron, acrylic, led light, sticker digital printing, digital printing untuk header. Process diawali alumunium welding, cutting acrylic, installation sticker digital printing, installation LED Light dan electricity',
          },
        ]
      },
      {
        id : 4,
        title: 'PT. Mevius Indonesia*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: First,
        logo: mevius,
        product : [
          {
            prod : 'Bar Top', 
            name : 'Mevius Cigarettes Display', 
            desc : 'Menggunakan material acrylic, led light, dan sticker cutting. Process diawali dengan cutting acrylic, installation sticker cutting, installation LED light dan electricity',
          },
        ]
      },
      {
        id : 5,
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: bebelac,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'Bebelac Go! Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
          },
        ]
      },
      {
        id : 6,
        title: 'PT. Sarihusada Generasi Mahardhika*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: First,
        logo: sgm,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
          },
        ]
        
      },
    ],
  },
  {
    option: 'sign',
    data: [
      {
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: First,
        logo: logo1,
      },
      {
        title: 'Second Slider Image',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: logo2,
      },
    ],
  },
  {
    option: 'booth',
    data: [
      {
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: First,
        logo: logo1,
        product : [
          {
            prod : 'DJ Table',
            name : 'Heineken DJ Table',
            desc : 'Menggunakan material wood, acrylic, led light, dan sticker cutting. Process diawali dengan cutting wood, cutting acrylic, installation sticker cutting, dan installation LED light dan electricity',
          },
          {
            prod : 'Table Booth',
            name : 'Bintang Radler Table Booth',
            desc : 'Menggunakan material acrylic, LED Light, sticker cutting. Process diawali dengan cutting acrylic, installation sticker cutting, dan installation LED light dan electricity',
          },
        ]
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: bebelac,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
          },
        ]
        
      },
    ],
  },
  {
    option: 'Installation',
    data: [
      {
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: First,
        logo: logo1,
        product : [
          {
            prod : 'Totem',
            name : 'Heineken Bottle Totem',
            desc : 'Menggunakan material wood, acrylic, LED light, sticker cutting. Process diawali dengan wood lathe, cutting acrylic, installation sticker cutting, installation LED light dan electricity',
          },
        ]
      },
      {
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: camel,
        product : [
          {
            prod : 'Standee Acrylic',
            name : 'Camel Standee Acrylic',
            desc : 'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan installation sticker digital printing',
          },
          {
            prod : 'Tin Can', 
            name : 'Camel Tin Can Packaging',
            desc : 'Mengguankan material cans, dan sticker digital printing. Process diawali dengan cleaning cans, installation sticker digital printing',
          },
        ]
      },
    ],
  },
];
