import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function MathBox1() {
	return (
		<div className="math-box1 form-group border border-secondary rounded text-left">
			<p>
				If each try has &theta; probability of success, the probability of x
				successes out of n tries is{" "}
			</p>

			<BlockMath math="P(x) = \binom n x \theta^x\left( 1 - \theta \right)^{n - x}" />

			<p>
				{" "}
				where <InlineMath>\binom n x</InlineMath>, a binomial coefficient, is
				the number of ways to choose x things out of a set of n things. In this
				case, we're counting ways to get x successes out of n tries. For
				example, to get two successes out of four tries, we could succeed on the
				first and second try, the first and third, and so on...The total number
				of ways is <InlineMath>\binom 4 2 = 6</InlineMath>. One way to calculate
				binomial coefficients is with the formula{" "}
			</p>

			<BlockMath math="\binom n x = \frac {n!} {x!(n-x)!}" />

			<p>
				where <InlineMath>a! = a * (a - 1) * ... 1</InlineMath>. For example,{" "}
				<InlineMath>3! = 3 * 2 * 1</InlineMath>
			</p>

			<p>
				Each way to get x successes out of n tries has probability{" "}
				<InlineMath math="\theta^x\left( 1 - \theta \right)^{n - x}" />. For
				example, suppose &theta; , the probability of success, is{" "}
				<InlineMath>\frac 1 3</InlineMath>. Then the probability of failure is{" "}
				<InlineMath>1 - \theta = \frac 2 3</InlineMath>. Now suppose that out of
				five tries, the first and third are successes and the rest are failures.
				This has probability
			</p>

			<BlockMath math="\frac 1 3 * \frac 2 3 * \frac 1 3 * \frac 2 3 * \frac 2 3" />
			<BlockMath math=" = \frac 1 3 * \frac 1 3 * \frac 2 3 * \frac 2 3 * \frac 2 3" />
			<BlockMath math=" = \left( \frac 1 3 \right)^2  \left(\frac 2 3 \right)^3" />
			<BlockMath math=" = \left( \frac 1 3 \right)^2  \left(\frac 2 3 \right)^{5-2}" />
			<BlockMath math=" = \theta^x\left( 1 - \theta \right)^{n - x}" />

			<p>
				Each way to get x successes out of n tries has the same probability,{" "}
				<InlineMath math=" \theta^x\left( 1 - \theta \right)^{n - x}" /> , and
				there are <InlineMath>\binom n x</InlineMath> of these ways, so the
				probability of getting x successes out of n tries is{" "}
				<InlineMath math="\binom n x \theta^x\left( 1 - \theta \right)^{n - x}" />{" "}
				.
			</p>

			<p>
				The cumulative distribution, C(x), is the probability of getting x{" "}
				<b>or fewer</b> successes. For example, C(2) is the probability of
				getting 0, 1, or 2 successes. To find the probability of C(2), then, we
				just add up the probailities of P(0), P(1), and P(2). In general,
			</p>

			<BlockMath math="C(x) = P(0) + P(1) + ... P(x)" />
			<BlockMath math="= \binom n 0 \theta^0\left( 1 - \theta \right)^{n} + \binom n 1 \theta^1\left( 1 - \theta \right)^{n-1} + ... \binom n x \theta^x\left( 1 - \theta \right)^{n - x}" />

			<p>which we can write as</p>

			<BlockMath math="C(x) = \sum_{i=0}^{x} \binom n i \theta^i\left( 1 - \theta \right)^{n - i}" />
		</div>
	);
}
