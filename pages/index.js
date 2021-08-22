import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    image:
      "https://www.ourescapeclause.com/wp-content/uploads/2020/09/shutterstock_1037347711-scaled.jpg",
    title: "First meet up",
    address: "Germany",
  },
  {
    id: "m2",
    image:
      "https://media.cntraveler.com/photos/59bb6a56e35d8f08044a32cf/master/w_2580%2Cc_limit/Rakotzbrucke-GettyImages-538162756.jpg",
    title: "Second meet up",
    address: "Italy",
  },
  {
    id: "m3",
    image:
      "https://abrokenbackpack.com/wp-content/uploads/2017/12/Best-Views-in-Greece-Shipwreck-Beach.jpg",
    title: "Third meet up",
    address: "Greece",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetup} />;
};

export const getStaticProps = async () => {
  // get the data before rendering the component above.
  // a special function to deal with pre loading of the data fetching from an API/DataBase and etc...
  // This function will never be shown or run on the client side (safety).
  // It will execute during the build process (not on the client machine!)

  return {
    props: {
      meetup: dummy_meetups,
    },
    revalidate: 1, // The page will be re-pre-generated every {} seconds IF there are https requests in this page.
    // This will make sure the data fetched in this case not old (at least 10 seconds to the past).
  };
};

export default HomePage;
