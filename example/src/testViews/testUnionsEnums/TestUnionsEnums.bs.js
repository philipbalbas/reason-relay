// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as ReasonRelay from "reason-relay/src/ReasonRelay.bs.js";
import * as SchemaAssets from "../../__reasonRelayGenerated__/SchemaAssets.bs.js";
import * as TestUnionsEnumsQuery_graphql from "../../__generated__/TestUnionsEnumsQuery_graphql.bs.js";

var UseQuery = ReasonRelay.MakeUseQuery(/* module */[/* query */TestUnionsEnumsQuery_graphql.node]);

var use = UseQuery[/* use */0];

function $$fetch(environment, variables) {
  return ReasonRelay.fetchQuery(environment, TestUnionsEnumsQuery_graphql.node, variables);
}

var Query_001 = /* Union_fromShelf */TestUnionsEnumsQuery_graphql.Unions[0];

var Query = /* module */[
  /* Operation */0,
  Query_001,
  /* UseQuery */UseQuery,
  /* use */use,
  /* fetch */$$fetch
];

function TestUnionsEnums(Props) {
  var query = Curry._3(use, {
        shelfId: "123",
        bookStatus: SchemaAssets.Enum_BookStatus[/* wrap */1](/* Discontinued */293760815)
      }, undefined, /* () */0);
  if (typeof query === "number") {
    return "Loading...";
  } else if (query.tag) {
    var data = query[0];
    var match = data.fromShelf;
    return React.createElement("div", undefined, React.createElement("h2", undefined, "Books"), $$Array.mapi((function (index, book) {
                      var match = book.status;
                      var tmp;
                      if (match == null) {
                        tmp = "";
                      } else {
                        var match$1 = SchemaAssets.Enum_BookStatus[/* unwrap */0](match);
                        tmp = match$1 >= -219956991 ? (
                            match$1 >= 293760815 ? "Not used anymore" : "Undergoing work"
                          ) : (
                            match$1 >= -358147186 ? "Here!" : ""
                          );
                      }
                      return React.createElement("div", {
                                  key: String(index)
                                }, book.title, React.createElement("div", undefined, tmp));
                    }), data.books), React.createElement("h2", undefined, "From shelf"), (match == null) ? null : $$Array.mapi((function (index, item) {
                        var match = Curry._1(TestUnionsEnumsQuery_graphql.Unions[/* Union_fromShelf */0][/* unwrap */0], item);
                        var tmp;
                        if (typeof match === "number") {
                          tmp = React.createElement("p", undefined, "Unknown...");
                        } else if (match[0] >= 737456201) {
                          tmp = React.createElement("p", undefined, React.createElement("strong", undefined, "Book: " + match[1].title));
                        } else {
                          var match$1 = match[1].books;
                          tmp = React.createElement("p", undefined, React.createElement("strong", undefined, "Collection size: " + String((
                                        (match$1 == null) ? /* array */[] : match$1
                                      ).length)));
                        }
                        return React.createElement("div", {
                                    key: String(index)
                                  }, tmp);
                      }), match));
  } else {
    return "Error!" + Belt_Option.getWithDefault(query[0].message, "");
  }
}

var make = TestUnionsEnums;

export {
  Query ,
  make ,
  
}
/* UseQuery Not a pure module */
