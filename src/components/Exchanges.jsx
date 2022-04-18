import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;
    if (isFetching) return <Loader />;

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {exchangesList?.map((exchange, i) => (
                    <Col span={24} key={i}>
                        <Collapse>
                            <Panel
                                key={exchange.uuid}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.uuid} style={{ flex: 1 }}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange['24hVolume'])}</Col>

                                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                        {/* <Col span={6}>{millify(exchange.marketShare)}%</Col> */}
                                        <Col span={6}>100%</Col>
                                    </Row>
                                )}
                            >
                                {/* {HTMLReactParser(exchange.description || '')} */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto facilis beatae exercitationem repellendus necessitatibus cupiditate repudiandae cum dolore eos eligendi, id eveniet doloribus molestias amet aliquam minima aspernatur vitae recusandae magnam perspiciatis dolores esse dolor hic? Porro, molestiae? Porro, minus itaque. Maxime quae consectetur, beatae quibusdam eaque quis sequi maiores laudantium, voluptate alias rerum accusantium officia ratione doloribus labore vero dolorem nam? Perferendis placeat asperiores vitae? Sint eligendi veniam minus a fugiat vel molestiae similique officia deserunt magni adipisci ex eius blanditiis odio expedita, rerum neque. Impedit, dolorum, sapiente ipsa accusantium quo aliquid nihil illo nesciunt sequi veniam nulla. Nihil error, molestiae dolore aliquam corporis eaque minus laboriosam doloremque beatae, commodi, velit qui deserunt nemo dolor. Aspernatur molestiae aperiam repudiandae culpa maiores accusantium autem pariatur corrupti ut, eveniet quae sapiente assumenda commodi nobis illo a error suscipit debitis. Ipsum temporibus totam veritatis ipsa corporis corrupti facilis nostrum. Deleniti quas voluptate, ex illo quae necessitatibus ducimus quo tempore fugiat error soluta, id nobis eligendi consequatur veritatis repellat nemo nostrum iste. Voluptatem cupiditate, tenetur praesentium qui officia amet saepe ullam quasi nisi laudantium. Quaerat consectetur labore tenetur expedita consequuntur molestiae eos vel, repudiandae culpa! Atque alias iste, laborum ab reprehenderit iusto?
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Exchanges;