import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://randomuser.me/api/?results=50`);
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={50} color="#fff" />
        </View>
      ) : (
        <>
          <View style={styles.navbar}>
            <Text style={styles.navbarText}>
              Fetch Users Data In React Native - {users.length} Users found
            </Text>
          </View>
          <View style={styles.container}>
            {users && (
              <FlatList
                keyExtractor={(key) => key.cell}
                showsVerticalScrollIndicator={false}
                data={users}
                renderItem={({ index, item }) => {
                  return (
                    <View style={styles.card}>
                      <View style={styles.cardHeader}>
                        <Image
                          style={styles.cardImage}
                          source={{
                            uri: item.picture.large,
                          }}
                        />
                      </View>
                      <View style={styles.cardBody}>
                        <Text style={styles.cardText}>
                          Name: {item.name.first} {item.name.last}
                        </Text>
                        <Text style={styles.cardText}>Email: {item.email}</Text>
                        <Text style={styles.cardText}>
                          Phone Number: {item.phone}
                        </Text>
                        <Text style={styles.cardText}>Age: {item.dob.age}</Text>
                        <Text style={styles.cardText}>
                          Gender: {item.gender}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            )}
          </View>
        </>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navbarText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  card: {
    width: 350,
    height: "auto",
    position: "relative",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    borderRadius: 8,
    marginHorizontal: "auto",
  },
  cardHeader: {
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    margin: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    borderRadius: 5,
    height: 400,
  },
  cardBody: {
    width: "90%",
    height: "auto",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 6,
  },
  buttons: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  button: {
    width: "auto",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#fff",
  },
});

export default Users;
