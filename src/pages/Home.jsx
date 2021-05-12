import React, {useCallback} from 'react';
import {Categories, PizzaBlock, Sort} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItemsNames = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}];



const Home = () => {
    console.log('RENDER HOME')
    // Hook useDispatch
    const dispatch = useDispatch();

    // Hook useSelector
    // Get items from pizzas.items from store
    const items = useSelector(({ pizzas }) => pizzas.items )


    const onSelectCategory = useCallback( (index) => {
        dispatch(setCategory(index))
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoriesNames} />
                <Sort items={sortItemsNames}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items &&
                    items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Home;
