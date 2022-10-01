import { ReactComponent as Todo } from "../../../assets/images/icon-todo.svg";
import { ReactComponent as Calendar } from "../../../assets/images/icon-calendar.svg";
import { ReactComponent as Reminders } from "../../../assets/images/icon-reminders.svg";
import { ReactComponent as Planning } from "../../../assets/images/icon-planning.svg";

const navItems = [
  {
    id: 1,
    name: "features",
    type: "dropdown",
    items: [
      {
        id: 1,
        icon: Todo,
        name: "todo list",
        path: "/todo",
      },
      {
        id: 2,
        icon: Calendar,
        name: "calendar",
        path: "/calendar",
      },
      {
        id: 3,
        icon: Reminders ,
        name: "reminders",
        path: "/reminders",
      },
      {
        id: 4,
        icon: Planning ,
        name: "planning",
        path: "/planning",
      },
    ],
  },
  {
    id: 2,
    name: "company",
    type: "dropdown",
    items: [
      {
        id: 1,
        name: "history",
        path: "/history",
      },
      {
        id: 2,
        name: "our team",
        path: "/team",
      },
      {
        id: 3,
        name: "blog",
        path: "/blog",
      },
    ],
  },
  {
    id: 3,
    name: "careers",
    path: "/careers",
    type: "single",
  },
  {
    id: 4,
    name: "about",
    path: "/about",
    type: "single",
  },
];

export default navItems;
