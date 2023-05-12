import { Text, View, StyleSheet, SafeAreaView, Button, ScrollView, Platform, StatusBar } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <ScrollView style={styles.container}>
        <Card title="Mustafa Kemal Atatürk" body='Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.'/>
        <Card title="Mustafa Kemal Atatürk" body="Yurtta sulh, cihanda sulh."/>
        <Card title="Özdemir Asaf" body="Seni bulmaktan önce arama isterim. Seni sevmekten önce anlamak isterim. Seni bir yaşam boyu bitirmek değil de, sana hep yeniden başlamak isterim."/>
        <Card title="Albert Einstein" body="Başarılı bir adam olmak için çalışmayın aksine önemli bir adam olmak için çalışın."/>
        <Card title="Sigmon Freud" body="Herkes doğru insanı bulmak ister, yanılmamak için. Oysa kimse uğraşmaz, doğru insan olmak için."/>
        <Card title="Cemal Süreyya" body="Güzel hayat isteyen güzel insan biriktirsin."/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    gay: 20,
  },
});
