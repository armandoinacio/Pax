import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Runnable } from 'react-native-background-runner';
import Service from 'react-native-background-runner';
import { sleep } from './src/util/CommonUtil';
export default function componentName() {
  const [runnedValue, setRunnedValue] = useState(0);

  const task = async (taskData) => {
    await new Promise(async () => {
      const { delay } = taskData;
      for (let i = 0; Service.isRunning(); i++) {
        setRunnedValue(i);
        console.log('Runned -> ', i);
        await sleep(delay);
      }
    });
  };
  const toggleBackgroun = async (runnerTask) => {
    if (!Service.isRunning()) {
      try {
        await Service.startRunnerTask(runnerTask, options);
        console.log('Successful start!');
      } catch (e) {
        console.log('Error', e);
      }
    } else {
      console.log('Stop background service');
      await Service.stop();
    }
  };
  const toggleBackground = async () => {
    const runnerTask = {
      // Defina os dados da tarefa aqui, se necessário
    };
  
    const options = {
      title: 'title',
      desc: 'desc',
      delay: 1000,
    };
  
    if (!Service.isRunning()) {
      try {
        if (options) {
          await Service.startRunnerTask(() => task(options), options);
          console.log('Successful start!');
        } else {
          console.log('Error: Options are undefined');
        }
      } catch (e) {
        console.log('Error', e);
      }
    } else {
      console.log('Stop background service');
      await Service.stop();
    }
  };
  
  return (
    <Runnable>
      <View>
        <TouchableOpacity onPress={toggleBackground}>
          <Text>Clica aqui</Text>
        </TouchableOpacity>
        <Text>Runned Value: {runnedValue}</Text>
      </View>
    </Runnable>
  );
}
