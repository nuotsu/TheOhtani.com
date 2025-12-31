<script>
	const feats = {
		'Most Unanimous MVPs':
			'Ohtani has won all four of his MVP awards (2021 AL, 2023 AL, 2024 NL, 2025 NL) by a unanimous vote. The first and only player to win MVP in both the American and National Leagues, and second only to Barry Bonds (7) in total MVP awards.',
		'Two-Way All-Star':
			'He is the only player in MLB history to be selected as an All-Star as both a pitcher and a position player in the same season, a feat he accomplished three times (2021-2023).',
		'Largest Contract in Sports History':
			'Ohtani signed a 10-year, $700 million contract with the Los Angeles Dodgers (December 2023).',
		'First 50/50 Season':
			'Ohtani became the only player in MLB history to record 50 home runs and 50 stolen bases in a single season (2024).',
		'Fastest to 40/40':
			'Ohtani became the fastest player to reach 40 home runs and 40 stolen bases in a single season, achieving the feat in just 126 games, shattering the previous record held by Alfonso Soriano (147 games) (August 23, 2024).',
		'10 Wins & 30 HRs in a Season':
			'Ohtani is the only player in MLB history with a season of at least 10 pitching wins and 30 home runs as a batter (2022).',
		'10 HRs & 100 Strikeouts in a Season':
			'He is also the first player in history to record 10 or more home runs as a hitter and 100 or more strikeouts as a pitcher in the same season (2021).',
		'Home Run Leader as a Pitcher (Simultaneous)':
			'He and Babe Ruth are the only players in MLB history to start a game as a pitcher while also leading the league in home runs at that time.',
		'Most Home Runs by a Japanese-born Player':
			"Ohtani broke Hideki Matsui's record for most career home runs by a Japanese-born player in MLB history (April 2024).",
		'Ohtani Rule':
			'The rule that allows a starting pitcher who also serves as the DH to remain in the game as the DH after being removed from the mound (2022).',
	}
</script>

<section id="numbers" class="grid-system p-lh">
	<h2>Numbers</h2>
	<p>
		The digits that define dominance. The statistics that shattered expectations. The records that
		will echo through eternity.
	</p>

	<dl class="col-span-2 grid grid-cols-subgrid">
		{#each Object.entries(feats) as [feat, value]}
			<div class="col-span-full grid grid-cols-subgrid">
				<dt class="text-right">{feat}</dt>
				<dd>{value}</dd>
			</div>
		{/each}
	</dl>
</section>
