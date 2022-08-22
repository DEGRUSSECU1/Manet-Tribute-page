const context = {
    title: 'Edouard Manet (1832-1883)',
    body: 'French painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.',
    image:'./resources/manet.png',
    biography: 'Edouard Manet was born in January 23, 1832 into a wealthy Parisian family. His father, a high ranking judge, wanted Edouard to study law and follow in his footsteps. But Edouard refused to choose a respectable career. He wanted to become a painter. Thank god for that! Imagine a world without Manet paintings!',
    paintings: [
      {
        image: './resources/secondEdouard_Manet_A_Bar_at_the_Folies-Bergère.webp',
        name: 'A Bar at the Folies-Bergère',
        description: 'A Bar at the Folies-Bergère (French: Un bar aux Folies Bergère) is a painting by Édouard Manet, considered to be his last major work. It was painted in 1882 and exhibited at the Paris Salon of that year. It depicts a scene in the Folies Bergère nightclub in Paris. ',
      
      },
      {
        image: './resources/Portrait of Suzanne Manet & her son Léon Leenhoff .webp',
        name: 'Portrait of Suzanne Manet & her son Léon Leenhoff ',
        description: ' Portrait of Suzanne Manet, nee Leenhoff (1830-1906) and her son, Leon Koella-Leenhoff (1852-1927). Painting by Edouard Manet (1832-1883), 1865.',
    
      },
      {
        image: './resources/ViewofParisfromtheTrocadero.jpg',
        name: 'View of Paris from the Trocadero',
        description: 'This work demonstrates her modern and feminist approach that incorporated Impressionist brushwork, color and interest in bourgeois leisure. The image depicts a child and two fashionably-dressed women leaning against a railing with a cityscape in the distance. The scene represents the view of Paris from the Trocadero Gardens, with a number of famous buildings on the skyline including the Palais d’Industrie, Notre Dame, Les Invalides, and The Tuileries Gardens. ',
        
      },
      {
        image: './resources/TheCafe.jpg',
        name: 'The Cafe',
        description: 'Among the numerous cafe scenes painted by Manet, this cafe-concert is among the most suggestive. With bold, golden strokes that seem to take their color from the beer in the mugs, Manet shows us people looking on while the singer reflected in the mirror sings herself hoarse.',
     
      },
      {
        image: './resources/A Crystal Vase.webp',
        name: 'A Crystal Vase ',
        description:  'Is an 1882 painting by Édouard Manet, in the Musée dOrsay in Paris since 1986. It shows clematis and oeillets, a French word used for several kinds of cut flowers, many from the Dianthus genus.',
      
      }
    ]
  };
  


  const source = document.getElementById("templateHB").innerHTML;

  const template = Handlebars.compile(source)

  const compiledHtml = template(context);

 document.getElementById("information").innerHTML = compiledHtml;

 


