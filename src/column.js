import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
    disableFilters: true
  },
  {
    Header: "First Name",
    accessor: "first_name",
    disableFilters: true

  },
  {
    Header: "Last Name",
    accessor: "last_name",
    disableFilters: true

  },
  {
    Header: "Email",
    accessor: "email",
    disableFilters: true

  },
  {
    Header: "DOB",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true
  },
  {
    Header: "Age",
    accessor: "age",
    disableFilters: true
  },
];
