import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../common/components/card/Card';
import { Text } from '../../common/components/typography/Typography';
import { useAppDispatch } from '../../common/hooks/redux';
import thunkActions from '../../common/store/actions/thunkActions';
import firstScreenSelectors from '../../common/store/selectors/firstScreenSelectors';

const ChuckNorris: FC = () => {
  const dispatch = useAppDispatch();
  const randomJoke = useSelector(firstScreenSelectors.getRandomJoke);
  const isLoading = useSelector(firstScreenSelectors.getIsLoading);

  const fetchJoke = useCallback(() => {
    dispatch(thunkActions.getSampleData());
  }, [randomJoke]);

  return (
    <Card
      title={ 'Get A Random Chuck Norris Joke' }
      body={ isLoading ? '...' : randomJoke }
      actionLabel={ (
        <Text fontSize="1rem" color="primary">
          Get a Joke
        </Text>
      ) }
      actionHandler={ fetchJoke }
      isActionDisabled={ isLoading }
    />
  );
};

export default ChuckNorris;
