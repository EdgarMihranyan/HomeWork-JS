import 'dotenv/config';

export const keys = {
     mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mypurpose.f77oc.mongodb.net/?retryWrites=true&w=majority`,
};
