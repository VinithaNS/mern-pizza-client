import React, { useState } from "react";

import { Form, Col, Row, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { filterPizzas } from "../actions/PizzaAction";
export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setSearchKey] = useState("");
  const [category, setcategory] = useState("all");
  return (
    <div className="p-4">
      <Form>
        <Row style={{ margin: "space-around" }}>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search Pizza"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizzas(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
