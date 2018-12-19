import React from 'react';
import { Layout, PageContent, HomeHeroBlock } from 'components/layout';
import data from 'static/constants/dcData';

class Home extends React.Component {
	static getInitialProps = async () => {
		const homeData = data.page.home;

		return {
			homePageData: homeData,
		};
	};

	getSections = () => {
		const articles = [];
		this.props.homePageData.sections.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		return (
			<Layout
				title="Deep Cast - Home"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{this.getSections()}
			</Layout>
		);
	}
}
export default Home;
