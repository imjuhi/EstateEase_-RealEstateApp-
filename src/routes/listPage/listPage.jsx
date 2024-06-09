import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Map from "../../components/map/map";

function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
