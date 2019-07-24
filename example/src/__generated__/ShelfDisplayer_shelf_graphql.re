module Unions = {};
type fragment = {. "name": string};

type t;
type fragmentRef;
type fragmentRefSelector('a) =
  {.. "__$fragment_ref__ShelfDisplayer_shelf": t} as 'a;
external getFragmentRef: fragmentRefSelector('a) => fragmentRef = "%identity";

let node: ReasonRelay.fragmentNode = [%bs.raw
  {| {
  "kind": "Fragment",
  "name": "ShelfDisplayer_shelf",
  "type": "Shelf",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
} |}
];
