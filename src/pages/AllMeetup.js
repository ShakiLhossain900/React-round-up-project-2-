import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://cdn.britannica.com/43/93843-050-A1F1B668/White-House-Washington-DC.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m3",
//     title: "This is a third meetup",
//     image:
//       "https://www.traveloffpath.com/wp-content/uploads/2022/03/off-the-path-florida.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City, USA",
//     description:
//       "This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetupPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-roundup-project2-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupPage;
