import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'TicTacToe',
})
  .use(reactotronRedux())
  .useReactNative()
  .connect();

export default reactotron;
