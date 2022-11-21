import { createSetValuesRequest, REQUEST_KEYWORDS, ScreenWrapper, useAPI, useDataProviders, useRowSelect } from '@sibvisions/reactui';
import React, { FC, useState, useEffect } from "react";
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';

const CustomRating: FC<any> = (props) => {
    const api = useAPI();

    const [selectedRow] = useRowSelect(props.screenName, props.dataProvider);

    const [rating, setRating] = useState<number|undefined>(selectedRow ? selectedRow.data[props.columnName] : undefined);

    useEffect(() => {
        setRating(selectedRow ? selectedRow.data[props.columnName] : undefined);
    }, [selectedRow]);

    return (
        <span style={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
            <Rating
                value={rating}
                onChange={(e) => {
                    const setValuesReq = createSetValuesRequest();
                    setValuesReq.columnNames = [props.columnName];
                    setValuesReq.dataProvider = props.dataProvider;
                    setValuesReq.values = [e.value];
                    api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
                }}
                cancel={false} />
        </span>
    )
}

const CustomSlider: FC<any> = (props) => {
    const api = useAPI();

    const [selectedRow] = useRowSelect(props.screenName, props.dataProvider);

    const [sliderValue, setSliderValue] = useState<number|undefined>(selectedRow ? selectedRow.data[props.columnName] : undefined);

    useEffect(() => {
        setSliderValue(selectedRow ? selectedRow.data[props.columnName] : undefined);
    }, [selectedRow]);

    return (
        <span style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <span>{sliderValue}</span>
            <Slider 
                value={sliderValue}
                onChange={(e) => setSliderValue(e.value as number)}
                onSlideEnd={(e) => {
                    const setValuesReq = createSetValuesRequest();
                    setValuesReq.columnNames = [props.columnName];
                    setValuesReq.dataProvider = props.dataProvider;
                    setValuesReq.values = [e.value];
                    api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
                }}
                style={{ width: "100%" }} />
        </span>

    )
}

const ScreenWrapperRestaurants: FC<any> = (props) => {
    const api = useAPI();

    const dataProviders = useDataProviders(props.screenName);

    const onOpen = () => {
        api.addCustomComponent("Res-O3_E_restaurants_RATING", <CustomRating screenName={props.screenName} dataProvider={dataProviders[0]} columnName="RATING" />)
        api.addCustomComponent("Res-O3_E_restaurants_MIN_ORDER_VALUE", <CustomSlider screenName={props.screenName} dataProvider={dataProviders[0]} columnName="MIN_ORDER_VALUE" />)
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {screen => 
                <>
                    {screen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperRestaurants