import { NativeModules } from 'react-native';

    type AlarmControllerType = {
      setAlarm(): Promise<string>;
    }

    const { AlarmController } = NativeModules;

    export default AlarmController as AlarmControllerType;
