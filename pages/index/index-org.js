import React from 'react';
import { Layout, HomeHeroBlock } from 'components/layout';
import data from 'static/constants';

class Home extends React.Component {
	static getInitialProps = async () => {
		const homeData = data.page.home;

		return {
			homePageData: homeData,
		};
	};

	render() {
		const { title, subtitle, description } = this.props.homePageData;

		return (
			<Layout
				title="Deep Cast - Home"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<HomeHeroBlock
					title={title}
					subtitle={subtitle}
					description={description}
				/>
			</Layout>
		);
	}
}
export default Home;
