require("@testing-library/jest-dom/extend-expect");
const t = require("@testing-library/react");
const React = require("react");
const queryMock = require("./queryMock");

const { test_fragment } = require("./Test_fragment.bs");

describe("Fragment", () => {
  test("basic fragments work", async () => {
    queryMock.mockQuery({
      name: "TestFragmentQuery",
      data: {
        loggedInUser: {
          id: "user-1",
          firstName: "First",
          lastName: "Last",
          onlineStatus: "Online",
        },
        users: null,
      },
    });

    t.render(test_fragment());
    await t.screen.findByText("First is online");
  });

  test("plural fragments work", async () => {
    queryMock.mockQuery({
      name: "TestFragmentQuery",
      data: {
        loggedInUser: {
          id: "user-1",
          firstName: "First",
          lastName: "Last",
          onlineStatus: "Online",
        },
        users: {
          edges: [
            {
              node: {
                id: "user-2",
                firstName: "Second",
                onlineStatus: "Online",
              },
            },
            {
              node: {
                id: "user-3",
                firstName: "Third",
                onlineStatus: "Offline",
              },
            },
          ],
        },
      },
    });

    t.render(test_fragment());
    await t.screen.findByText("Second is online");
    await t.screen.findByText("Third is offline");
  });

  test("optional fragment use hook works", async () => {
    queryMock.mockQuery({
      name: "TestFragmentQuery",
      data: {
        loggedInUser: {
          id: "user-1",
          firstName: "First",
          lastName: "Last",
          onlineStatus: "Online",
        },
        users: null,
      },
    });

    t.render(test_fragment());

    await t.screen.findByText("Opt not activated");

    t.fireEvent.click(t.screen.getByText("Use opt"));
    await t.screen.findByText("First is here!");

    t.fireEvent.click(t.screen.getByText("Hide opt"));
    await t.screen.findByText("Opt not activated");
  });
});
