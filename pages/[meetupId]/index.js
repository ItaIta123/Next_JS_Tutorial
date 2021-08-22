import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://Itamar:${process.env.MONGO_DB_PASSWORD}@next-js-tutorial.cs4ra.mongodb.net/meetupsDataBase?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // fetch the data for a single meetup
  alert("hey");

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://Itamar:${process.env.MONGO_DB_PASSWORD}@next-js-tutorial.cs4ra.mongodb.net/meetupsDataBase?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: selectedMeetup.toString(),
    },
  };
};

export default MeetupDetails;
