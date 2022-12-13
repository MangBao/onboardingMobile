import { ScrollView } from 'react-native';
import {Card} from 'react-native-paper';

export default Card = () => {
  return (
    <ScrollView>
    <Card>
      <Card.Content>
        <Title>Geeks For Geeks</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png',
        }}
      />
      <Card.Content>
        <Paragraph>A Computer Science portal for Geeks</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Add To Favourites</Button>
      </Card.Actions>
    </Card>
    </ScrollView>

  );
};
