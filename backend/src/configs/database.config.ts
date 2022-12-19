import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect("mongodb://localhost:27017/meanfoodapp"!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}