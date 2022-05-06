import { CardInfo } from './CardInfo';

export const MockData = [
    new CardInfo({        
        id: 1,
        imageURL: 'https://picsum.photos/360/216',
        foodName : 'Pepperoni Pizza',
        foodDescription : 'Pizza with pepperonis',
        foodPrice : 27.90
    }),
    new CardInfo({        
        id: 2,
        imageURL: 'https://picsum.photos/360/216',
        foodName : 'Hawaiian Pizza',
        foodDescription : 'Pizza with ham and pineapples',
        foodPrice : 29.90
    }),
    new CardInfo({        
        id: 3,
        imageURL: 'https://picsum.photos/360/216',
        foodName : 'Hawaiian Pizza',
        foodDescription : 'This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description ',
        foodPrice : 29.90
    }),
]