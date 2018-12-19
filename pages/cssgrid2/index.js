import React from 'react';
import styled from 'styled-components';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
	GridCard,
	GridBlock,
	GridBlockLarge,
	GridBlockSmall,
	GridTextBlock,
	GridImageBlock,
	GridVideoBlock,
} from 'components/general';

const Article = styled.div``;

class CssGridPage2 extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - CSS Grid Example"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<ContentSection bgColor="dark">
					<GridSection>
						<GridBlock>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=301" />
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="light">
					<GridSection>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=201" />
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								Facere amet, non pariatur qui voluptate, at nam molestiae
								sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
						<GridBlock>
							<GridVideoBlock />
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="grey">
					<GridSection>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=0"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=10"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=100"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=500"
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="grey">
					<GridSection>
						<GridBlockLarge>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum veritatis doloremque veniam fugiat sed dolor dicta sit quam, consequatur temporibus ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores. ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockLarge>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlockSmall>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=402" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=402" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=403" />
						</GridBlockSmall>
						<GridBlockLarge>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=404" />
						</GridBlockLarge>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=405" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=406" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=405" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=406" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=405" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=406" />
						</GridBlockSmall>
						<GridBlockSmall>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlockSmall>
					</GridSection>
				</ContentSection>
			</Layout>
		);
	}
}
export default CssGridPage2;
