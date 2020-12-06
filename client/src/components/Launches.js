import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div>
      <h2 className="display-4 my-3">Launches</h2>
      <MissionKey />
      {data.launches.map((launch) => {
        return <LaunchItem launch={launch} key={launch.flight_number} />;
      })}
    </div>
  );
};

export default Launches;
