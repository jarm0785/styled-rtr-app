import { createAsyncThunk } from '@reduxjs/toolkit';
import sampleApi from '../../api/sampleApi';
import { ISampleResponse } from '../../interface/IApi';

const serializeError = (error: unknown) => error;

const thunkActions = {
  getSampleData: createAsyncThunk(
    'sampleApi/getSampleData',
    async () => {
      const response = await sampleApi.getSampleData();

      return (await response.data) as ISampleResponse;
    }, { serializeError },
  ),
};

export default thunkActions;
