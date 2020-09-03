import db from '../repository/FirebaseDBconfig';

export const CreateProduct = product => {
    return fetch(db.baseURL + db.documents.products + db.extension, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
};

export const FetchProducts = () => {
    return fetch(db.baseURL + db.documents.products + db.extension);
};

export const DeleteProduct = id => {
    return fetch(db.baseURL + db.documents.products + '/' +id+ db.extension , {
        method: 'DELETE'
    })
};

export const UpdateProducts = ({id, title, description, imageUrl}) => {
    return fetch(db.baseURL + db.documents.products + '/' +id+ db.extension, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           title,
           description,
           imageUrl
        })
    })
};