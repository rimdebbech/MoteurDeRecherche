export interface Book {

    id: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        description: string;
        publishedDate: string;
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };

    };
}
