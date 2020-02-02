import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { Linebreak } from '../components/Toolkit';
import theme from '../styles/theme';
import { opacity, maxWidth } from '../styles/util';
import Layout from '../components/Layout';

const Intro = styled.header`
	padding: 4rem;
	background-color: ${theme.greyLight1};
	height: 70vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	${maxWidth(705)} {
		align-items: center;
		text-align: center;
	}

	h1 {
		/* remove normalize default */
		margin-top: 0;
		color: ${theme.secondaryColors[500]};

		text-shadow: 1px 1px 2px ${opacity(theme.greyDark2, 0.25)};
		transition: all 0.25s;

		&:hover {
			text-shadow: 1px 2px 10px ${opacity(theme.secondaryColors[500], 0.25)};
		}
	}

	h2 {
		/* background-color: ${theme.greyDark3}; */
		color: ${theme.greyDark1};

		.delimiter {
			display: none;
		}

		${maxWidth(590)} {
			.delimiter,
			p {
				display: inline;
			}
		}
	}
`;
const Portfolio = styled.section`
	padding: 6rem 3rem;

	${maxWidth(775)} {
		padding: 4rem 3.5rem;
	}
`;
const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	gap: 2rem;
	justify-content: end;

	& > a {
		display: flex;
		justify-content: center;
	}
`;

const HomePage = () => (
	<Layout>
		<main>
			<Intro>
				<h1>Front-end Developer</h1>
				<h2>
					<p>Senior at University of Information Technology</p>
					<p className='delimiter'>.</p>
					<p>Looking for an internship in 2020</p>
				</h2>
			</Intro>
			<Portfolio>
				<h2 id='portfolio'>Portfolio</h2>
				<Linebreak />
				<CardGrid>
					{projects.map((p) => (
						<ProjectCard
							key={p.title}
							image={p.image}
							title={p.title}
							technology={p.technologies}
							link={p.link}
						/>
					))}
				</CardGrid>
			</Portfolio>
		</main>
	</Layout>
);

export default HomePage;