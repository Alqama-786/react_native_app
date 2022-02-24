import * as React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const FlatListDemo = () => {
  const data = [
    {
      id: "1",
      Title: "The Land Girls",
      Distributor: "Gramercy",
      Source: null,
      Director: null,
    },
    {
      id: "2",
      Title: "First Love, Last Rites",
      Distributor: "Strand",
      Source: null,
      Director: null,
    },
    {
      id: "3",
      Title: "I Married a Strange Person",
      Distributor: "Lionsgate",
      Source: null,
      Director: null,
    },
    {
      id: "4",
      Title: "Let's Talk About negativity",
      Distributor: "Fine Line",
      Source: null,
      Director: null,
    },
    {
      id: "5",
      Title: "Slam",
      Distributor: "Trimark",
      Source: "Original Screenplay",
      Director: null,
    },
    {
      id: "6",
      Title: "Mississippi Mermaid",
      Distributor: "MGM",
      Source: null,
      Director: null,
    },
    {
      id: "7",
      Title: "Following",
      Distributor: "Zeitgeist",
      Source: null,
      Director: "Christopher Nolan",
    },
    {
      id: "8",
      Title: "Foolish",
      Distributor: "Artisan",
      Source: "Original Screenplay",
      Director: null,
    },
    {
      id: "9",
      Title: "Pirates",
      Distributor: null,
      Source: null,
      Director: "Roman Polanski",
    },
    {
      id: "10",
      Title: "Duel in the Sun",
      Distributor: null,
      Source: null,
      Director: null,
    },
  ];

  return (
    <FlatList
      keyExtractor={(key) => key.id}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={(element) => {
        return (
          <View style={styles.flatList}>
            <Text style={styles.testStyle}>Title: {element.item.Title}</Text>
            <Text style={styles.testStyle}>
              Distributor: {element.item.Distributor || "N/A"}
            </Text>
            <Text style={styles.testStyle}>
              Source: {element.item.Source || "N/A"}
            </Text>
            <Text style={styles.testStyle}>
              Director: {element.item.Director || "No Director"}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  testStyle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
  },
});

export default FlatListDemo;
