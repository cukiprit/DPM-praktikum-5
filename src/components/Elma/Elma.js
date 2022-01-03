import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { sizing } from '../../utils/style';

const Course = ({ course, imageCourse, colorCourse }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.course, { backgroundColor: colorCourse }]}>
        <Image source={{ uri: imageCourse }} style={styles.imageCourse} />
        <Text style={styles.txtCourse}>{course}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Recent = ({ course, color }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.contentRecent, { backgroundColor: color }]}>
        <Text style={styles.textCourse}>{course}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Elma = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <Text style={styles.textTop}>Recently accessed courses</Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
              <Recent course="E Commerce" color="#646ECB" />
              <Recent course="Algoritma" color="#222831" />
              <Recent course="Algoritma" color="#2bcdc1" />
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.titleCourse}>All Courses</Text>
          <View style={{ alignItems: 'center', marginBottom: sizing.xxl }}>
            <View style={{ flexDirection: 'row' }}>
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*5-aoK8IBmXve5whBQM90GA.png&f=1&nofb=1"
                course="Dasar Pemrograman Mobile"
                colorCourse="#4A2C2C"
              />
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Fdata-science-46-1170621.png&f=1&nofb=1"
                course="Data Science"
                colorCourse="#253361"
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.minecraftkrant.nl%2Fmedia%2F166%2Fjava-logo.png&f=1&nofb=1"
                course="Java"
                colorCourse="#280F34"
              />
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fnetwork-clipart-star-topology-3.png&f=1&nofb=1"
                course="Jaringan Komputer"
                colorCourse="#C83B4C"
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fobjectcomputing.com%2Ffiles%2F7115%2F6693%2F2581%2Fmulti-cloud.png&f=1&nofb=1"
                course="Cloud Computing"
                colorCourse="#FDA831"
              />
              <Course
                imageCourse="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ischool.berkeley.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffullscreen%2Fpublic%2Fevent_teaser_image%2Fml-at-b.png%3Fitok%3DW9si17Kf&f=1&nofb=1"
                course="Machine Learning"
                colorCourse="#9D8F8F"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textTop: {
    marginVertical: sizing.xl,
    marginLeft: sizing.lg,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textCourse: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: sizing.lg,
    marginTop: sizing.md,
  },
  contentRecent: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginHorizontal: sizing.md,
  },
  course: {
    width: 150,
    height: 140,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: sizing.lg,
    marginTop: sizing.xl,
  },
  imageCourse: {
    height: 54,
    width: 54,
    marginVertical: sizing.lg,
  },
  titleCourse: {
    marginLeft: sizing.xl,
    marginTop: sizing.xl,
    fontWeight: 'bold',
    fontSize: 30,
  },
  txtCourse: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Elma;
