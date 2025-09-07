// _homestyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

  // 🔍 Search Section
  searchGroup: {
    padding: 16,
    marginTop : 20,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
    paddingRight: 8,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    paddingVertical: 6,
    color: "#555",
  },
  searchButton: {
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🏠 Filter Section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 0,
  },
  filterContainer: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },

  // 📋 Property Listing Section
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  // 📌 Pagination & Show More
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
