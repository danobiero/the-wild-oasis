import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Price (low to high)" },
          { value: "regularPrice-desc", label: "Price (High to low)" },
          { value: "maxCapacity-asc", label: "Capacity (Low to High)" },
          { value: "maxCapacity-desc", label: "Capacity(High to Low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
