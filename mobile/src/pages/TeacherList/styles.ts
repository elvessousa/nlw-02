import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    backgroundColor: "#04d361",
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 54,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
  defaultMessage: {
    borderRadius: 8,
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "#d4c2ff",
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    textAlign: "center",
    padding: 24,
    width: "90%",
    fontSize: 16,
    color: "#8257e5",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
