<script>
  export let item, index;
</script>

<div class="svg-item" data-sal="slide-up" data-sal-duration="800">
  <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
    <circle
      class="donut-hole"
      cx="20"
      cy="20"
      r="15.91549430918954"
      fill="#fff"
    />
    <circle
      class="donut-ring"
      cx="20"
      cy="20"
      r="15.91549430918954"
      fill="transparent"
      stroke-width="3.5"
    />

    <circle
      class={`${item.color} stroke-current donut-segment donut-segment-${index}`}
      cx="20"
      cy="20"
      r="15.91549430918954"
      fill="transparent"
      stroke-width="3.5"
      stroke-dasharray={`${item.skillLevel} ${100 - item.skillLevel}`}
      stroke-dashoffset="25"
    >
    </circle>
    <g class="fill-current">
      <text y="50%" transform="translate(0, 2)">
        <tspan
          x="50%"
          text-anchor="middle"
          class={`${item.color} donut-percent`}
        >
          {item.skillLevel}%
        </tspan>
      </text>
      <text y="60%" transform="translate(0, 2)">
        <tspan
          x="50%"
          text-anchor="middle"
          class="text-gray-800 font-light donut-data"
        >
          {item.name}
        </tspan>
      </text>
    </g>
  </svg>
</div>

<style>
  .svg-item {
    animation: donutfade 1s;
  }

  .donut-percent {
    font-size: 0.5em;
    transform: translateY(0.5em);
    font-weight: bold;
  }

  .donut-data {
    font-size: 0.2rem;
    transform: translateY(0.5em);
    text-align: center;
    animation: donutfadelong 1s;
  }

  .donut-percent {
    animation: donutfadelong 1s;
  }

  @keyframes donutfade {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  .donut-ring {
    stroke: #ebebeb;
  }

  .donut-segment {
    transform-origin: center;
  }

  .donut-segment {
    animation: donut1 4s;
  }
  @keyframes donutfadelong {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes donut1 {
    0% {
      stroke-dasharray: 0, 100;
    }
    100% {
      stroke-dasharray: y, 0;
    }
  }
</style>
