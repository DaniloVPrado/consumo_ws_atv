import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Cartao from './Cartao'

const PrevisaoItem = ({ previsao }) => {
  const sunrise = previsao.current.sunrise;
  const sunset = previsao.current.sunset;
  const feels_like = previsao.current.feels_like;
  return (
    <Cartao estilos={styles.cartao}>
      <View style={styles.tela}>
        <Image
          style={styles.imagem}
          source={{ uri: "https://openweathermap.org/img/wn/01d.png"}}
        />
        <View>
          <View style={styles.primeiraLinha}>
            <Text>Nascer e por do Sol</Text>
          </View>
          <View style={styles.segundaLinha}>
            <Text style={styles.valor}>Sunrise: {sunrise}</Text>
            <Text style={styles.valor}>Sunset: {sunset}</Text>
            <Text style={styles.valor}>Feels_Like: {feels_like}</Text>
          </View>
        </View>
      </View>
    </Cartao>
  );
};

export default PrevisaoItem;

const styles = StyleSheet.create({
  cartao: {
    marginBottom: 8,
  },
  tela: {
    flexDirection: "row",
  },
  imagem: {
    width: 50,
    height: 50,
  },
  primeiraLinha: {
    fexDirection: "row",
    justifyContent: "center",
  },
  segundaLinha: {
    fex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  valor: {
    marginHorizontal: 2,
  },
});